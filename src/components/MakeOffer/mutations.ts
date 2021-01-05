import { gql, useMutation } from '@apollo/client'
import { Offers_offers } from '../../pages/Marketplace/gqlTypes/Offers'
import { addEdge } from '../../utils/graphql'
import {
  OfferCreate,
  OfferCreateVariables,
  OfferCreate_offerCreate_offer,
} from './gqlTypes/OfferCreate'

export const createOfferFragment = gql`
  fragment OfferMade on Offer {
    id
    status
    amount {
      amount
      currency
    }
    message
    createdBy {
      id
      avatarUrl
      firstName
      lastName
      username
    }
  }
`
const offerCreateMutation = gql`
  ${createOfferFragment}
  mutation OfferCreate($input: OfferCreateInput!) {
    offerCreate(input: $input) {
      offer {
        ...OfferMade
      }
      offerErrors {
        message
        field
        code
      }
    }
  }
`

export const useOfferCreateMutation = () => {
  const [createOffer] = useMutation<OfferCreate, OfferCreateVariables>(
    offerCreateMutation,
    {
      update(cache, { data: { offerCreate } }) {
        cache.modify({
          fields: {
            offers(prevOffers) {
              const newOfferRef = cache.writeFragment<
                OfferCreate_offerCreate_offer
              >({
                data: offerCreate.offer,
                fragment: createOfferFragment,
              })

              const data: Offers_offers = {
                ...prevOffers,
                totalCount: prevOffers.totalCount + 1,
                edges: addEdge({
                  position: 'end',
                  prevEdges: prevOffers.edges,
                  nextEdge: {
                    __typename: 'OfferCountableConnection',
                    node: newOfferRef,
                  },
                }),
              }
              return data
            },
          },
        })
      },
    },
  )
  return createOffer
}

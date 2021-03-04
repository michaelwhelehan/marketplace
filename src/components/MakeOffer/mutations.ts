import { gql, useMutation } from '@apollo/client'
import { Offers_offers } from '../../pages/Marketplace/gqlTypes/Offers'
import { publicUserBasicFragment } from '../../services/fragments/auth'
import { addEdge } from '../../utils/graphql'
import {
  OfferCreate,
  OfferCreateVariables,
  OfferCreate_offerCreate_offer,
} from './gqlTypes/OfferCreate'

export const createOfferFragment = gql`
  ${publicUserBasicFragment}
  fragment OfferMade on Offer {
    id
    status
    amount {
      amount
      currency
    }
    message
    createdBy {
      ...PublicUserBasic
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
                fragmentName: 'OfferMade',
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

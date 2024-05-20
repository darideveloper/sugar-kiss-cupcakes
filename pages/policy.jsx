import RootLayout from "@/layouts/root-layout"
import PolicyCard from "@/components/policy-card"
import MainText from '@/components/main-text'

export default function Index({}) {
  
  const policies = [
    {
      "title": "Pickup Policy",
      "texts": [
        "Please pick up orders at your scheduled time.",
        "I understand that delays can happen, but I can't promise to wait more than 30 minutes past your scheduled pick-up time. If you need to change",
        "The pick-up time, let me know in advance. I will do my best to accomodate you. NO SHOW ORDERS WILL NOT BE REFUNDED. You will not be able to place any additional orders. ",
      ]
    },
    {
      "title": "Cancellation Policy",
      "texts": [
        "Once a deposit has been received, yet you find you need to cancel, I will refund you 100%, provided you contact me within 24 hours.",
      ]
    },
    {
      "title": "Allergy Policy",
      "texts": [
        "Please note I operate from a NJ licensed home kitchen. I uphold strict cleanliness & kindly ask to inform me of any allergies or dietary restrictions when placing an order. This provides guidance to ensure your safety & satisfaction.",
      ]
    },
  ]
  
  return (
    <RootLayout pageTitle="Policy">
      <MainText>
        Sugar Kiss Policy
      </MainText>

      {
        policies.map((policy, index) => {
          return (
            <PolicyCard
              key={index}
              title={policy.title}
              texts={policy.texts}
            />
          )
        })
      }   
    </RootLayout>
  )
}

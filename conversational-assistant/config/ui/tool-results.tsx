// Define custom components to replace the default function call UI
// These will be displayed in the chat when a tool call is triggered

import React from 'react'
import { CheckCircle } from 'lucide-react'

const CartAdded: React.FC = () => {
  return (
    <div className="flex items-center rounded-md border border-black p-2.5">
      <CheckCircle className="mr-2" />
      <div>Added to cart</div>
    </div>
  )
}

const OrdersList: React.FC = () => {
  return (
    <div className="flex flex-col rounded-md border border-black p-4">
      <h3 className="font-semibold mb-2">Your Orders</h3>
      <div className="flex items-center gap-2">
        <CheckCircle className="text-green-600" />
        <div>Orders retrieved successfully</div>
      </div>
    </div>
  )
}

export const toolDisplayMap = {
  add_to_cart: CartAdded,
  get_orders: OrdersList
  // add more components as you define them
}

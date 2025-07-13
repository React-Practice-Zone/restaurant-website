export default async function createOrder(orderData, cartContext) {
  try {
    const creationOrderResponse = await fetch("http://localhost:5050/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartContext.items,
          customer: orderData,
        },
      }),
    });

    if (!creationOrderResponse.ok) {
      const errorData = await creationOrderResponse.text();
      throw new Error(
        `Failed to create order: ${creationOrderResponse.status} ${errorData}`
      );
    }

    const responseData = await creationOrderResponse.json();
    return responseData;
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error(error.message || "Failed to create order");
  }
}

/* eslint-disable */

export default function tabFilterTickets(tickets, tab) {
  const clonedTickets = [...tickets]

  switch (tab) {
    case 0:
      return clonedTickets.sort((ticket1, ticket2) => ticket1.price - ticket2.price)

    case 1:
      return clonedTickets.sort(
        (ticket1, ticket2) =>
          ticket1.segments[0].duration +
          ticket1.segments[1].duration -
          (ticket2.segments[0].duration + ticket2.segments[1].duration),
      )

    default:
      return tickets
  }
}

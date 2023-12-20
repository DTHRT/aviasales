export default function tabFilterTickets(tickets, tab) {
  const clonedTickets = [...tickets]

  switch (tab) {
    case 1:
      return clonedTickets.sort((ticket1, ticket2) => ticket1.price - ticket2.price)

    case 2:
      return clonedTickets.sort((ticket1, ticket2) => {
        const duration1 = ticket1.segments[0].duration + ticket1.segments[1].duration
        const duration2 = ticket2.segments[0].duration + ticket2.segments[1].duration

        return duration1 - duration2
      })

    default:
      return tickets
  }
}

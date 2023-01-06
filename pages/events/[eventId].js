import { useRouter } from "next/router"
import { getEventById } from "../../dummy-data";



export default function EventDetailPage() {
    const router = useRouter()
    const eventID = router.query.eventId;

    const event = getEventById(eventID)

    return (
      <div>Event Details</div>
    )
  }
  
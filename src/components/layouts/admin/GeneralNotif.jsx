import Loader from "../../fragments/Loader";
import { NotificationsCard } from "../../fragments/NotificationsCard";

export function GeneralNotif({ data, isLoading }) {
    return (
        <>
            <div>
                {
                    isLoading ?
                        <Loader />
                        :
                        data.map(dt => (
                            <NotificationsCard key={dt._id} dt={dt} />
                        ))
                }
            </div>
        </>
    )
}
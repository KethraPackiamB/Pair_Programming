import { SmallDetailValues } from "../atoms/SmallDetailValues"

export const SmallBadges = () => {

    return(
        <div className="d-flex gap-3 my-4">
            <SmallDetailValues text=".Online" amount="$0.99*"/>
            <SmallDetailValues text=".net" amount="$14.99*"/>
            <SmallDetailValues text=".inc" amount="$999.99*"/>
            <SmallDetailValues text=".me" amount="$11.99"/>
        </div>
    )
}
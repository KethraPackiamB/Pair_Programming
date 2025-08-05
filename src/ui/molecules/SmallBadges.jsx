import { SmallDetailValues } from "../atoms/SmallDetailValues"

export const SmallBadges = () => {

    return(
        <div className="d-flex gap-3 my-4">
            <SmallDetailValues labels=".Online" amount="$0.99*"/>
            <SmallDetailValues labels=".net" amount="$14.99*"/>
            <SmallDetailValues labels=".inc" amount="$999.99*"/>
            <SmallDetailValues labels=".me" amount="$11.99"/>
        </div>
    )
}
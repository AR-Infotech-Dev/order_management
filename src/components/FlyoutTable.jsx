import { useParams } from "react-router-dom";
const FlyoutTable = () => {
    const { id } = useParams();

    const service = customization_data.find((s) => s.id === id);
    return (
        <>
        

        </>
    )
}
export default FlyoutTable;

import Image from "next/image";
import { ReviewProps } from "./Form";

interface ReviewPropsAndFunc extends ReviewProps {
    removeBtn: (uuid: string) => void;
}

export default function GameReview({
    inputName,
    inputDesc,
    inputReview,
    inputImage,
    uuid,
    removeBtn,
}: ReviewPropsAndFunc) {
    return (
        <div className="border border-sky-500 mt-4 ml-4 flex flex-col align-center items-center gap-2 py-6 px-4 mr-4">
            <button
                onClick={() => removeBtn(uuid)}
                className="border border-teal-200 px-2 py-1 rounded bg-sky-100 mb-6"
            >
                Remove
            </button>
            <h2>
                Name: <span className="p-2">{inputName}</span>
            </h2>
            <p>
                Desc: <span style={{ fontSize: "text-md" }}>{inputDesc}</span>
            </p>
            <p>
                Review:{" "}
                <span style={{ fontSize: "text-md" }}>{inputReview}</span>
            </p>
            <Image src={inputImage} alt={inputImage} width={150} height={150} />
        </div>
    );
}

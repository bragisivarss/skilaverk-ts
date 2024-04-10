import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GameReview from "@/components/GameReview";

export interface ReviewProps  {
    inputName: string;
    inputDesc: string;
    inputReview: string;
    inputImage: string;
    uuid: string;
};

export default function Form() {
    const [formInput, setFormInput] = useState<ReviewProps>({
        inputName: "",
        inputDesc: "",
        inputReview: "",
        inputImage: "",
        uuid: "",
    });

    const [reviews, setReviews] = useState<ReviewProps[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newReview: ReviewProps = {
            inputName: formInput.inputName,
            inputDesc: formInput.inputDesc,
            inputReview: formInput.inputReview,
            inputImage: formInput.inputImage,
            uuid: uuidv4(),
        };

        setReviews([...reviews, newReview]);
        setFormInput({
            inputName: "",
            inputDesc: "",
            inputReview: "",
            inputImage: "",
            uuid: formInput.uuid,
        });
    };

    const handleClear = () => {
        setReviews([]);
    };

    const handleRemoveOne = (uuid: string) => {
        const newReviews = reviews.filter((review) => review.uuid !== uuid);
        setReviews(newReviews);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="pt-12 flex border-b-2 pb-4 gap-8"
            >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        required
                        placeholder="Fifa"
                        name="name"
                        id="name"
                        className="border border-slate-400"
                        type="text"
                        value={formInput.inputName}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                inputName: e.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="desc">Desc:</label>
                    <input
                        required
                        placeholder="Pretty good"
                        name="desc"
                        id="desc"
                        className="border border-slate-400"
                        type="text"
                        value={formInput.inputDesc}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                inputDesc: e.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="review">Score:</label>
                    <input
                        required
                        min="0"
                        max="10"
                        placeholder="Rating: 0-10"
                        name="review"
                        id="review"
                        className="border border-slate-400"
                        type="number"
                        value={formInput.inputReview}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                inputReview: e.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <label htmlFor="image">Image link :</label>
                    <input
                        required
                        placeholder="https://image.com/img1"
                        name="image"
                        id="image"
                        className="border border-slate-400"
                        type="text"
                        value={formInput.inputImage}
                        onChange={(e) =>
                            setFormInput({
                                ...formInput,
                                inputImage: e.target.value,
                            })
                        }
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="border border-teal-200 px-2 py-1 rounded bg-sky-100 mb-6"
                    >
                        Submit
                    </button>
                </div>
            </form>

            <div className="flex flex-wrap">
                {reviews.map((review) => (
                    <div key={review.uuid}>
                        <div key={review.uuid} className="flex flex-wrap">
                            <GameReview
                                {...review}
                                removeBtn={handleRemoveOne}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {reviews.length >= 1 ? (
                <button
                    type="button"
                    onClick={handleClear}
                    className="block mx-auto mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    Clear all
                </button>
            ) : null}
        </>
    );
}

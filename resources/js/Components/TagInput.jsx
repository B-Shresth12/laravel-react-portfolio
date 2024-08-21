import { useState } from "react";
import TextareaGroup from "./TextareaGroup";
export default function TagInput() {
    const [tags, setTags] = useState([]);

    function handleTagsChange(event) {
        const newTags = event.target.value.split(","); // Assuming tags are comma-separated
        setTags(newTags);
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <TextareaGroup
                    label="Who are you?"
                    icon="ti ti-question-mark"
                    name="who_are_you"
                    value={tags}
                    placeholder="Graphic Designer,Web Developer, App Developer"
                    onChange={handleTagsChange}
                    style={{ height: "100px" }}
                />
            </div>
            <div className="col-md-6">
                <div>
                    {tags.map((tag, index) => (
                        <span key={index} className="badge bg-primary mx-1 mb-1">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

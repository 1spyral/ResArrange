"use client";

import useJobStore from "@/stores/useJobStore"

const JobTextBox = () => {
    const { description, setDescription } = useJobStore();
    return (
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
    );
}

export default JobTextBox;
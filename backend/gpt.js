const OpenAI = require("openai");
const fs = require("fs").promises;

const openai = new OpenAI();

const PATH = "resume.txt";

let resume = fs.readFile(PATH, "utf8");

const arrange = async (keywords, description, format) => {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system", 
                content: "You are a helpful assistant who rearranges the items on pre-existing resumes" },
            {
                role: "user",
                content: `Rearrange the current resume sections, projects, skills, and bullet points to tailor to the job description provided. Use all of the provided information, and do not add any additional points. Only output the new resume, no other text\nResume keywords that should be prioritized: ${keywords.join(", ")}.\n\nResume:\n${await resume}\n\nJob description:\n${description}`,
            },
        ],
    });

    return completion.choices[0].message.content;
    // return `Rearrange the current resume contents to tailor to the job description provided. Use all of the provided information, and do not add any additional points. Only output the new resume, no other text\nResume keywords that should be prioritized: ${keywords.join(", ")}.\n\nResume:\n${await resume}\n\nJob description:\n${description}`
};

module.exports = { arrange };

[
    {
        "question": "Как осуществляется доставка?",
        "answer": "быстро!",
        "tags": [
            "popular",
            "new"
        ],
        "likes": 3,
        "status": "published"
    }
]

enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}


// комментарий
// функция 
async function getFaqs(req: { topicId: number; status?: QuestionStatus }): Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}

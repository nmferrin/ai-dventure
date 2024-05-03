const { getStoryCompletion } = require('../../config/geminiApi');

const fetchStory = async (req, res) => {
    const prompt = req.body.prompt;
    const story = await getStoryCompletion(prompt);
    if (story) {
        res.json({ success: true, story });
    } else {
        res.status(500).json({ success: false, message: 'Failed to get story from API' });
    }
};

module.exports = { fetchStory };

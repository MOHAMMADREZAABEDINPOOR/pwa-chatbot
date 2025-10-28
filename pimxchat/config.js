// Gemini API Configuration
module.exports = {
    API_KEY: 'AIzaSyBwoJ5nTO_Ff5kybvqRosmWCpAZBUApkvA',
    MODEL_CONFIG: {
        model: 'gemini-1.5-flash',
        generationConfig: {
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 2048,
        }
    }
};


# Language-Based Message Alignment Feature

## Overview

This feature automatically detects the language direction of user messages and adjusts the AI response alignment accordingly. Messages in right-to-left (RTL) languages like Persian and Arabic are right-aligned, while messages in left-to-right (LTR) languages like English are left-aligned.

## How It Works

### Language Detection

The system uses Unicode character ranges to detect RTL languages:

- **RTL Languages**: Persian (Farsi), Arabic, Hebrew, and other right-to-left writing systems
- **LTR Languages**: English, French, Spanish, and other left-to-right writing systems

### Message Alignment

- **RTL Messages**: User messages appear on the right, AI responses on the left
- **LTR Messages**: User messages appear on the left, AI responses on the right

## Implementation Details

### JavaScript Functions

#### `detectLanguageDirection(text)`
Detects the writing direction of the input text by checking for RTL Unicode character ranges.

```javascript
function detectLanguageDirection(text) {
    const rtlPatterns = [
        /[\u0600-\u06FF]/, // Arabic
        /[\u0750-\u077F]/, // Arabic Supplement
        // ... more patterns
    ];
    
    const hasRTL = rtlPatterns.some(pattern => pattern.test(text));
    return hasRTL ? 'rtl' : 'ltr';
}
```

#### `applyLanguageAlignment(messageBubble, text, sender)`
Applies the appropriate CSS classes and text direction to message bubbles.

```javascript
function applyLanguageAlignment(messageBubble, text, sender) {
    const direction = detectLanguageDirection(text);
    
    // Remove existing alignment classes
    messageBubble.classList.remove('ltr-aligned', 'rtl-aligned');
    
    // Add direction-specific class
    messageBubble.classList.add(`${direction}-aligned`);
    
    // Set text direction
    const messageText = messageBubble.querySelector('p');
    if (messageText) {
        messageText.style.direction = direction;
        messageText.style.textAlign = direction === 'rtl' ? 'right' : 'left';
    }
}
```

### CSS Classes

#### Default RTL Alignment (Persian/Arabic)
```css
.message-bubble.user {
    align-self: flex-start; /* User on the right */
}

.message-bubble.bot {
    align-self: flex-end; /* Bot on the left */
}
```

#### LTR Alignment (English/Other LTR languages)
```css
.message-bubble.user.ltr-aligned {
    align-self: flex-end; /* User on the left */
}

.message-bubble.bot.ltr-aligned {
    align-self: flex-start; /* Bot on the right */
}
```

#### RTL Alignment (Explicit for Persian/Arabic)
```css
.message-bubble.user.rtl-aligned {
    align-self: flex-start; /* User on the right */
}

.message-bubble.bot.rtl-aligned {
    align-self: flex-end; /* Bot on the left */
}
```

## Integration Points

The language alignment is applied at several key points in the chat system:

1. **Message Display**: When new messages are created
2. **Message Editing**: When user messages are edited
3. **Version Navigation**: When switching between AI response versions
4. **Bot Response Updates**: When AI responses are updated

## Testing

### Test Files

- `test_language_detection.html`: Tests the language detection function with various inputs
- `demo_language_alignment.html`: Interactive demo showing the alignment in action

### Test Cases

The system has been tested with:
- Pure English text
- Pure Persian text
- Pure Arabic text
- Mixed language text
- Numbers and special characters
- CJK languages (Japanese, Chinese, Korean)

## Usage Examples

### Persian Message
```
User: سلام، حال شما چطور است؟
AI: سلام! ممنون، حال من خوب است. شما چطور هستید؟
```
*Both messages are right-aligned (RTL)*

### English Message
```
User: Hello, how are you?
AI: Hello! I'm doing well, thank you. How are you?
```
*Both messages are left-aligned (LTR)*

### Mixed Language
```
User: Hello سلام
AI: سلام! Hello! How can I help you?
```
*Both messages are right-aligned (RTL due to Persian characters)*

## Browser Compatibility

This feature works in all modern browsers that support:
- CSS Flexbox
- Unicode character detection
- CSS custom properties (variables)

## Performance Considerations

- Language detection is performed client-side using regex patterns
- The detection is fast and doesn't impact message display performance
- CSS classes are used for alignment to ensure smooth animations

## Future Enhancements

Potential improvements could include:
- More sophisticated language detection using machine learning
- Support for vertical writing systems
- Custom alignment preferences per user
- Language-specific font selection

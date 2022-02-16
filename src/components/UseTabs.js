import { useState } from 'react';

export const UseTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
}

// 사용 예시
// const content = [
//     {
//         tab: "Section 1",
//         content: "I'm the content of the Section 1"
//     },
//     {
//         tab: "Section 2",
//         content: "I'm the content of the Section 2"
//     }
// ]

// function App() {
//     const { currentItem, changeItem } = UseTabs(0, content);
//     return (
//         <div className="App">
//             <h1>HELLO</h1>
//             {content.map((section, index) => (
//                 <button onClick={() => changeItem(index)}>{section.tab}</button>
//             ))}
//             <div>{currentItem.content}</div>
//         </div>
//     );
// }

// export default App;

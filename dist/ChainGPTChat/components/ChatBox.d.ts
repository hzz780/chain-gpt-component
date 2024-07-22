import React from 'react';
interface IChatItem {
    text: string | React.FC;
    type: 'question' | 'answer';
}
export default function ChatBox({ defaultList, Welcome, apiUri }: {
    defaultList?: IChatItem[];
    Welcome?: React.FC;
    apiUri: string;
}): React.JSX.Element;
export {};

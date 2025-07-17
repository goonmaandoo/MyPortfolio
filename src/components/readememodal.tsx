import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Modal from './Modal';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    readmeUrl: string;  // raw.githubusercontent.com URL
}

export default function ReadmeModal({ isOpen, onClose, readmeUrl }: Props) {
    const [content, setContent] = useState<string>('Loading...');

    useEffect(() => {
        if (!isOpen) return;

        fetch(readmeUrl)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch README');
                return res.text();
            })
            .then((text) => setContent(text))
            .catch(() => setContent('README를 불러오는데 실패했습니다.'));
    }, [isOpen, readmeUrl]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        </Modal>
    );
}

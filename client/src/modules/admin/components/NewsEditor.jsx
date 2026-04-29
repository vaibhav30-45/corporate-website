import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, List, ListOrdered, Quote, Heading2, Undo, Redo } from 'lucide-react';

const MenuButton = ({ onClick, isActive, children, title }) => (
    <button
        type="button"
        onClick={onClick}
        title={title}
        className={`p-2 rounded-lg transition-all ${isActive ? 'bg-corporate-orange text-white' : 'text-gray-600 hover:bg-gray-100'}`}
    >
        {children}
    </button>
);

const NewsEditor = ({ value, onChange, placeholder = 'Write your news content...' }) => {
    const editor = useEditor({
        extensions: [StarterKit.configure({ heading: { levels: [2, 3] } })],
        content: value,
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
    });

    if (!editor) return null;

    return (
        <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
            <div className="flex gap-1 p-2 bg-gray-50 border-b border-gray-100 flex-wrap">
                <MenuButton onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')} title="Bold">
                    <Bold size={16} />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')} title="Italic">
                    <Italic size={16} />
                </MenuButton>
                <div className="w-px bg-gray-200" />
                <MenuButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })} title="Heading">
                    <Heading2 size={16} />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')} title="Bullet List">
                    <List size={16} />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')} title="Ordered List">
                    <ListOrdered size={16} />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')} title="Quote">
                    <Quote size={16} />
                </MenuButton>
                <div className="w-px bg-gray-200" />
                <MenuButton onClick={() => editor.chain().focus().undo().run()} title="Undo">
                    <Undo size={16} />
                </MenuButton>
                <MenuButton onClick={() => editor.chain().focus().redo().run()} title="Redo">
                    <Redo size={16} />
                </MenuButton>
            </div>
            <EditorContent editor={editor} className="prose prose-sm max-w-none p-4 min-h-64" />
        </div>
    );
};

export default NewsEditor;

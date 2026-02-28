import parse from "html-react-parser";

export function Summary({ summary }) {
    return (
        <div className="summary main_content_block">
            <div>{parse(summary)}</div>
        </div>
    );
}

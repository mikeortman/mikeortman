import Parser from "html-react-parser";

export function Summary(props) {
    return <div className={"summary main_content_block"}>
        <div>
            {Parser(props.summary)}
        </div>
    </div>
}
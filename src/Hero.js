export function Hero({ name, title }) {
    return (
        <div className="hero main_content_block">
            <h1>
                <span className="name">{name}</span>
                <span className="title">{title}</span>
            </h1>
        </div>
    );
}

function Article ({title, date = "January 1, 1970", preview, minutes}) {
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{getReadingTime(minutes)}</p>
        </article>
    );
}

function getReadingTime(minutes) {
    const icon = minutes < 30 ? "☕️" : "🍱";
    const interval = minutes <30 ? 5: 10;
    const icons = icon.repeat(Math.ceil(minutes / interval));
    return`${icons} ${minutes} min read`;
}

export default Article;
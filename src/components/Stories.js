import Story from './Story';

export default function Stories() {
    const stories = [
        { title: "9gag", urlImg: "assets/img/9gag.svg" },
        { title: "meowed", urlImg: "assets/img/meowed.svg" },
        { title: "barked", urlImg: "assets/img/barked.svg" },
        { title: "nathanwpylestrangeplanet", urlImg: "assets/img/nathanwpylestrangeplanet.svg" },
        { title: "wawawicomics", urlImg: "assets/img/wawawicomics.svg" },
        { title: "respondeai", urlImg: "assets/img/respondeai.svg" },
        { title: "filomoderna", urlImg: "assets/img/filomoderna.svg" },
        { title: "memeriagourmet", urlImg: "assets/img/memeriagourmet.svg" }
    ];

    return (
        <div className="stories">
            {stories.map((story) => (
                <Story key={story.title} text={story.title} urlImg={story.urlImg} />
            ))}

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
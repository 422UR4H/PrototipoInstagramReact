import Story from './Story';

export default function Stories() {
    return (
        <div class="stories">
            <Story title="9gag" urlImg="assets/img/9gag.svg" />
            <Story title="meowed" urlImg="assets/img/meowed.svg" />
            <Story title="barked" urlImg="assets/img/barked.svg" />
            <Story title="nathanwpylestrangeplanet" urlImg="assets/img/nathanwpylestrangeplanet.svg" />
            <Story title="wawawicomics" urlImg="assets/img/wawawicomics.svg" />
            <Story title="respondeai" urlImg="assets/img/respondeai.svg" />
            <Story title="filomoderna" urlImg="assets/img/filomoderna.svg" />
            <Story title="memeriagourmet" urlImg="assets/img/memeriagourmet.svg" />

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
import Post from './Post';

const posts = [
    {
        text: "meowed",
        urlUserImg: "assets/img/meowed.svg",
        urlContentImg: "assets/img/gato-telefone.svg",
        altContentImg: "gato-telefone",
        urlLikeImg: "assets/img/respondeai.svg",
        textLike: "respondeai",
        amountLike: 101523
    },
    {
        text: "barked",
        urlUserImg: "assets/img/barked.svg",
        urlContentImg: "assets/img/dog.svg",
        altContentImg: "dog",
        urlLikeImg: "assets/img/adorable_animals.svg",
        textLike: "adorable_animals",
        amountLike: 99159
    },
    {
        text: "meowed",
        urlUserImg: "assets/img/meowed.svg",
        urlContentImg: "assets/img/dog.svg",
        altContentImg: "dog",
        urlLikeImg: "assets/img/adorable_animals.svg",
        textLike: "adorable_animals",
        amountLike: 99159
    }
];

export default function Posts() {
    return (
        <div class="posts">
            {posts.map((post => (
                <Post 
                    text={post.text}
                    urlUserImg={post.urlUserImg}
                    urlContentImg={post.urlContentImg}
                    altContentImg={post.altContentImg}
                    urlLikeImg={post.urlLikeImg}
                    textLike={post.textLike}
                    amountLike={post.amountLike}
                />
            )))}
        </div>
    );
}
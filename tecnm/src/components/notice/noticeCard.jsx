function NoticeCard({ description, image, url }) {
    return (
        <article className="bg-[#353636] overflow-hidden flex flex-col p-4 rounded-lg hover:bg-[#6c6d6d] transition duration-1000 cursor-pointer">
            <a href={url}>
                <img src={image} alt=""/>
            </a>
            <span className="text-white text-center mt-6">{description}</span>
        </article>
    );
}

export default NoticeCard;

function MainNoticeCard({ category, img, url, description }) {
    return (
        <article>
            <a href={url} className="w-fit flex flex-col gap-4">
                <img src={img} alt="" className="w-[750px]" />
                <h4 className="text-white italic text-xl">{category}</h4>
                <p className="text-white font-spectral text-4xl max-w-[680px] text-pretty">
                    {description}
                </p>
            </a>
        </article>
    );
}

export default MainNoticeCard;

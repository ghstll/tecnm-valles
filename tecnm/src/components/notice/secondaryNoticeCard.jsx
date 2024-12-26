import '../../index.css';
function SecondaryNoticeCard({ category, title ,img,url}) {
    return (
        <article className="flex flex-col gap-3">
            <a href={url} className=" secondary-notice-card-link flex items-center gap-4">
                <div className="flex flex-col gap-6">
                    <h5 className="uppercase text-gray-400">{category}</h5>
                    <h4 className="secondary-notice-card-title font-bold text-white">{title}</h4>
                </div>
                <img src={img} alt=""  className="h-[110px]"/>
            </a>
            <hr />
        </article>
    );
}

export default SecondaryNoticeCard;


const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
export function Languages (props){
    return (
        <div className="relative">{props.apps}
            <image
            loader={imageLoader} src="Pic.png" alt="pic of me" width={64}px height={64px}/>
            <p className="">{props.lan}</p>
        </div>
       
    )
}
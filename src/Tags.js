import './tags.css'
const Tags = () => {
return (
<>
    <div className='grid-container'>
        <span className='input-grid' id="1">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png" className='tag1' alt="tag" />
            <input type="text" placeholder="Enter" className="txtbgcolor box grid1" />
        </span>
        <span className='input-grid' id="2">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png" className='tag2' alt="tag" />
            <p className='boxes grid2'>Work</p>
        </span>
        <span className='input-grid' id="3">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png" className='tag3' alt="tag" />
            <p className='boxes grid3'>Inspiration</p>
        </span>
        <span className='input-grid' id="4">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png" className='tag4' alt="tag" />
            <p className='boxes grid4'>To Do</p>
        </span>
        <span className='input-grid' id="5">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png" className='tag5' alt="tag" />
            <p className='boxes grid5'>Personal</p>
        </span>
        <span className='input-grid' id="6">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/price-tag.png" className='tag6' alt="tag" />
            <p className='boxes grid6'>Random</p>
        </span>

    </div>
</>
)
}

export default Tags
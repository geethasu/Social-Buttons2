const Button = props => {
  //  Write your code here.
  const {className, buttonText} = props
}

const element = (
  //  Write your code here.
  <div className='social-buttons-container'>
    <div className='content-container'>
      <h1 class='heading'>Social Buttons</h1>
      <div className='buttons-container'>
        <Button buttonText='Like' className='Like-button' />
        <Button buttonText='comment' className='comment-button' />
        <Button buttonText='Share' className='share-button' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

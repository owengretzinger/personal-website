export default function OutlineButton(text: string, link: string) {
    return (
      <a href={link} target="_blank"
        className='border-2 border-orange px-4 py-2 rounded-lg text-orange hover:bg-orange/10 transition'>
        {text}
      </a>
    )
  }
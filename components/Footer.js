import BLOG from '@/blog.config'
import Vercel from '@/components/Vercel'
const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
            <br>
            <span id="times">0</span>
            <br>
            <span id="yy520">0</span>
          </p>
          <script type="text/javascript" src="https://raw.githack.com/e9965/nobelium/main/times.js" ></script>
          <Vercel />
        </div>
      </div>
    </div>
  )
}

export default Footer

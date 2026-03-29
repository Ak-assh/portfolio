export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-accent1/10 bg-surface/50 text-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted text-sm font-mono">
          © {new Date().getFullYear()} Akash Kumar. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-2 rounded-full border border-accent2/30 text-accent2 text-sm hover:bg-accent2/10 transition-colors font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  )
}

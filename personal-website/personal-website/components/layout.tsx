type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="text-black font-noto selection:bg-orange/20">
      {props.children}
    </div>
  );
}
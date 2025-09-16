const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center">
        <h3 className="text-sm font-bold text-pink-500 tracking-widest uppercase">{title}</h3>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{subtitle}</h2>
    </div>
);
export default SectionTitle;
export default function CommitteeMemberGrid({ members }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((member, idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg p-6 shadow">
                    {member.image && (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-40 h-44 object-cover shadow-sm ring-2 ring-gray-200 mb-4"
                        />
                    )}
                    <div className="border-l-4 border-primary pl-4 mb-2 font-semibold text-lg">{member.name}</div>
                    <div className="text-gray-700">{member.role}</div>
                </div>
            ))}
        </div>
    );
}
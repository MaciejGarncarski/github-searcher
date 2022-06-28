import Image from 'next/image';

type UserProps = {
  login: string;
  fullName: string;
  avatar: string;
  bio?: string;
  location: string;
};

export const User = ({ login, fullName, avatar, bio, location }: UserProps) => {
  return (
    <div className="grid w-full min-h-user py-4 grid-cols-user gap-x-3 gap-y-2 border-t-2 border-slate-300 ">
      <div>
        {avatar && (
          <Image src={avatar} alt="eloo" width={30} height={30} className=" rounded-full" />
        )}
      </div>
      <div className="col-start-2 ">
        <h2 className="text-blue-600 font-bold">{fullName}</h2>
        <p className="text-slate-700">{login}</p>
      </div>
      {bio && <p className="col-start-2 self-center font-bold">{bio}</p>}
      {location && <div className="col-start-2 text-sm text-slate-700">{location}</div>}
    </div>
  );
};

import Select from "../select/select";


const perSize = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { value: '50', label: '50' },
];

export const PageSize = ({
  size,
  onChangeSize,
}: {
  size: number;
  onChangeSize: (value: number) => void;
}) => {
  return (
    <div className="ml-5 w-[110px]">
      <Select
        onValueChange={(value: string) => {
          onChangeSize(Number(value));
        }}
        value={size.toString()}
        name="pag-page-size"
        options={perSize}
      />
    </div>
  );
};

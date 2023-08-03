import { FC } from "react";
import classes from "./styles.module.scss";
import * as SelectPrimitive from "@radix-ui/react-select";

export type Option = {
  label: string;
  value: string;
};

export type SelectProps = {
  options: Option[];
  defaultValue: string;
  onValueChange: (value: string) => void;
};

export const Select: FC<SelectProps> = ({ options, ...props }) => {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className={classes.SelectTrigger}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon />
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.Viewport className={classes.SelectViewport}>
            {options?.map(({ value, label }) => {
              return (
                <SelectPrimitive.Item
                  key={value}
                  value={value}
                  className={classes.SelectItem}
                >
                  <SelectPrimitive.ItemText className={classes.SelectLabel}>
                    {label}
                  </SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator
                    className={classes.SelectItemIndicator}
                  />
                </SelectPrimitive.Item>
              );
            })}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

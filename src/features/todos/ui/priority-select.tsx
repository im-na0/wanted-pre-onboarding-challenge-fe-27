import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared';
import { PriorityBadge } from './priority-badge';

export function PrioritySelect() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={<PriorityBadge level="normal" />} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="urgent">
            <PriorityBadge level="urgent" />
          </SelectItem>
          <SelectItem value="normal">
            <PriorityBadge level="normal" />
          </SelectItem>
          <SelectItem value="low">
            <PriorityBadge level="low" />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

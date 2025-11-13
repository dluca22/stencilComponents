export function formatName(first?: string, middle?: string, last?: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}


export function capitalizeInitial(str: string):string | null {
  if(!str){
    return;
  }

  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}
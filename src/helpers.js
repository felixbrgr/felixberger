export function formatPath(asLocationPathname) {
  const deslashedPathname = asLocationPathname.replace(/\/$/, '');
  const deslashedPathend = (deslashedPathname.length > 3) ? deslashedPathname.substr(deslashedPathname.lastIndexOf('/') + 1) : '/';
  const asOriginalPath = (deslashedPathend.length > 1) ? '/' + deslashedPathend + '/' : '/';

  return asOriginalPath;
}
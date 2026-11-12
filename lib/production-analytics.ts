/** Fail closed for preview builds, unknown deployments and non-canonical hosts. */
export function isProductionAnalyticsAllowed(
  environment: string | undefined,
  hostname: string,
  protocol: string
): boolean {
  return (
    environment === 'production' &&
    hostname === 'www.swimcoachcertification.com' &&
    protocol === 'https:'
  );
}

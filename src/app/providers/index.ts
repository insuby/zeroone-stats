import { compose } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { withAuth } from 'app/providers/with-auth';
import { withQueryClient } from 'app/providers/with-query-client';
import { withAlert } from 'app/providers/with-alert';

export const withProviders = compose<FunctionComponent>(
  withQueryClient,
  withAuth,
  withAlert,
);

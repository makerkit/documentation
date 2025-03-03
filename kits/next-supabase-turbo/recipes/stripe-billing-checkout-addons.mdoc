---
status: "published"
title: 'Checkout Addons with Stripe Billing'
label: 'Checkout Addons with Stripe Billing'
order: 3
description: 'Learn how to create a subscription with addons using Stripe Billing.'
---

Stripe allows us to add multiple line items to a single subscription. This is useful when you want to offer additional features or services to your customers.

This feature is not supported by default in Makerkit. However, in this guide, I will show you how to create a subscription with addons using Stripe Billing, and how to customize Makerkit to support this feature.

Let's get started!

## 1. Personal Account Checkout Form

File: `apps/web/app/home/(user)/billing/_components/personal-account-checkout-form.tsx`

Update your `PersonalAccountCheckoutForm` component to pass addon data to the checkout session creation process:

 ```typescript {% title="home/(user)/billing/_components/personal-account-checkout-form.tsx" %}
<CheckoutForm
  // ...existing props
  onSubmit={({ planId, productId, addons }) => {
    startTransition(async () => {
      try {
        const { checkoutToken } = await createPersonalAccountCheckoutSession({
          planId,
          productId,
          addons, // Add this line
        });
        setCheckoutToken(checkoutToken);
      } catch {
        setError(true);
      }
    });
  }}
/>
```

This change allows the checkout form to handle addon selections and pass them to the checkout session creation process.

## 2. Personal Account Checkout Schema

Let's add addon support to the personal account checkout schema. The `addons` is an array of objects, each containing a `productId` and `planId`. By default, the `addons` array is empty.

Update your `PersonalAccountCheckoutSchema`:

 ```typescript {% title="home/(user)/billing/_lib/schema/personal-account-checkout.schema.ts" %}
export const PersonalAccountCheckoutSchema = z.object({
  planId: z.string().min(1),
  productId: z.string().min(1),
  addons: z
    .array(
      z.object({
        productId: z.string().min(1),
        planId: z.string().min(1),
      }),
    )
    .default([]),
});
```

This schema update ensures that the addon data is properly validated before being processed.

## 3. User Billing Service

Update your `createCheckoutSession` method. This method is responsible for creating a checkout session with the billing gateway. We need to pass the addon data to the billing gateway:

 ```typescript {% title="home/(user)/billing/_lib/server/user-billing.service.ts" %}
async createCheckoutSession({
  planId,
  productId,
  addons,
}: z.infer<typeof PersonalAccountCheckoutSchema>) {
  // ...existing code

  const checkoutToken = await this.billingGateway.createCheckoutSession({
    // ...existing props
    addons,
  });

  // ...rest of the method
}
```

This change ensures that the addon information is passed to the billing gateway when creating a checkout session.

## 4. Team Account Checkout Form

File: `apps/web/app/home/[account]/billing/_components/team-account-checkout-form.tsx`

Make similar changes to the `TeamAccountCheckoutForm` as we did for the personal account form.

## 5. Team Billing Schema

File: `apps/web/app/home/[account]/billing/_lib/schema/team-billing.schema.ts`

Update your `TeamCheckoutSchema` similar to the personal account schema.

## 6. Team Billing Service

File: `apps/web/app/home/[account]/billing/_lib/server/team-billing.service.ts`

Update the `createCheckoutSession` method similar to the user billing service.

## 7. Billing Configuration

We can now add addons to our billing configuration. Update your billing configuration file to include addons:

 ```typescript {% title="apps/web/config/billing.sample.config.ts" %}
plans: [
  {
    // ...existing plan config
    addons: [
      {
        id: 'price_1J4J9zL2c7J1J4J9zL2c7J1',
        name: 'Extra Feature',
        cost: 9.99,
        type: 'flat' as const,
      },
    ],
  },
],
```

NB: the `ID` of the addon should match the `planId` in your Stripe account.

## 8. Localization

Add a new translation key for translating the term "Add-ons" in your billing locale file:

 ```json {% title="apps/web/public/locales/en/billing.json" %}
{
  // ...existing translations
  "addons": "Add-ons"
}
```

## 9. Billing Schema

File: `packages/billing/core/src/create-billing-schema.ts`

The billing schema has been updated to include addons. You don't need to change this file, but be aware that the schema now supports addons.

## 10. Create Billing Checkout Schema

File: `packages/billing/core/src/schema/create-billing-checkout.schema.ts`

The checkout schema now includes addons. Again, you don't need to change this file, but your checkout process will now support addons.

## 11. Plan Picker Component

File: `packages/billing/gateway/src/components/plan-picker.tsx`

This component has been significantly updated to handle addons. It now displays addons as checkboxes and manages their state.

Here's the updated Plan Picker component:

 ```tsx {% title="packages/billing/gateway/src/components/plan-picker.tsx" %}
'use client';

import { useMemo } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

import {
  BillingConfig,
  type LineItemSchema,
  getPlanIntervals,
  getPrimaryLineItem,
  getProductPlanPair,
} from '@kit/billing';
import { formatCurrency } from '@kit/shared/utils';
import { Badge } from '@kit/ui/badge';
import { Button } from '@kit/ui/button';
import { Checkbox } from '@kit/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@kit/ui/form';
import { If } from '@kit/ui/if';
import { Label } from '@kit/ui/label';
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemLabel,
} from '@kit/ui/radio-group';
import { Separator } from '@kit/ui/separator';
import { Trans } from '@kit/ui/trans';
import { cn } from '@kit/ui/utils';

import { LineItemDetails } from './line-item-details';

const AddonSchema = z.object({
  name: z.string(),
  id: z.string(),
  productId: z.string(),
  planId: z.string(),
  cost: z.number(),
});

type OnSubmitData = {
  planId: string;
  productId: string;
  addons: z.infer<typeof AddonSchema>[];
};

export function PlanPicker(
  props: React.PropsWithChildren<{
    config: BillingConfig;
    onSubmit: (data: OnSubmitData) => void;
    canStartTrial?: boolean;
    pending?: boolean;
  }>,
) {
  const { t } = useTranslation(`billing`);

  const intervals = useMemo(
    () => getPlanIntervals(props.config),
    [props.config],
  ) as string[];

  const form = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    resolver: zodResolver(
      z
        .object({
          planId: z.string(),
          productId: z.string(),
          interval: z.string().optional(),
          addons: z.array(AddonSchema).optional(),
        })
        .refine(
          (data) => {
            try {
              const { product, plan } = getProductPlanPair(
                props.config,
                data.planId,
              );

              return product && plan;
            } catch {
              return false;
            }
          },
          { message: t('noPlanChosen'), path: ['planId'] },
        ),
    ),
    defaultValues: {
      interval: intervals[0],
      planId: '',
      productId: '',
      addons: [] as z.infer<typeof AddonSchema>[],
    },
  });

  const { interval: selectedInterval } = form.watch();
  const planId = form.getValues('planId');

  const { plan: selectedPlan, product: selectedProduct } = useMemo(() => {
    try {
      return getProductPlanPair(props.config, planId);
    } catch {
      return {
        plan: null,
        product: null,
      };
    }
  }, [props.config, planId]);

  const addons = form.watch('addons');

  const onAddonAdded = (data: z.infer<typeof AddonSchema>) => {
    form.setValue('addons', [...addons, data], { shouldValidate: true });
  };

  const onAddonRemoved = (id: string) => {
    form.setValue(
      'addons',
      addons.filter((item) => item.id !== id),
      { shouldValidate: true },
    );
  };

  // display the period picker if the selected plan is recurring or if no plan is selected
  const isRecurringPlan =
    selectedPlan?.paymentType === 'recurring' || !selectedPlan;

  const locale = useTranslation().i18n.language;

  return (
    <Form {...form}>
      <div
        className={
          'flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0'
        }
      >
        <form
          className={'flex w-full max-w-xl flex-col space-y-6'}
          onSubmit={form.handleSubmit(props.onSubmit)}
        >
          <If condition={intervals.length}>
            <div
              className={cn('transition-all', {
                ['pointer-events-none opacity-50']: !isRecurringPlan,
              })}
            >
              <FormField
                name={'interval'}
                render={({ field }) => {
                  return (
                    <FormItem className={'rounded-md border p-4'}>
                      <FormLabel htmlFor={'plan-picker-id'}>
                        <Trans i18nKey={'common:billingInterval.label'} />
                      </FormLabel>

                      <FormControl id={'plan-picker-id'}>
                        <RadioGroup name={field.name} value={field.value}>
                          <div className={'flex space-x-2.5'}>
                            {intervals.map((interval) => {
                              const selected = field.value === interval;

                              return (
                                <label
                                  htmlFor={interval}
                                  key={interval}
                                  className={cn(
                                    'flex items-center space-x-2 rounded-md border border-transparent px-4 py-2 transition-colors',
                                    {
                                      ['border-primary']: selected,
                                      ['hover:border-primary']: !selected,
                                    },
                                  )}
                                >
                                  <RadioGroupItem
                                    id={interval}
                                    value={interval}
                                    onClick={() => {
                                      form.setValue('interval', interval, {
                                        shouldValidate: true,
                                      });

                                      form.setValue('addons', [], {
                                        shouldValidate: true,
                                      });

                                      if (selectedProduct) {
                                        const plan = selectedProduct.plans.find(
                                          (item) => item.interval === interval,
                                        );

                                        form.setValue(
                                          'planId',
                                          plan?.id ?? '',
                                          {
                                            shouldValidate: true,
                                            shouldDirty: true,
                                            shouldTouch: true,
                                          },
                                        );
                                      }
                                    }}
                                  />

                                  <span
                                    className={cn('text-sm', {
                                      ['cursor-pointer']: !selected,
                                    })}
                                  >
                                    <Trans
                                      i18nKey={`billing:billingInterval.${interval}`}
                                    />
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        </RadioGroup>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
          </If>

          <FormField
            name={'planId'}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Trans i18nKey={'common:planPickerLabel'} />
                </FormLabel>

                <FormControl>
                  <RadioGroup value={field.value} name={field.name}>
                    {props.config.products.map((product) => {
                      const plan = product.plans.find((item) => {
                        if (item.paymentType === 'one-time') {
                          return true;
                        }

                        return item.interval === selectedInterval;
                      });

                      if (!plan || plan.custom) {
                        return null;
                      }

                      const planId = plan.id;
                      const selected = field.value === planId;

                      const primaryLineItem = getPrimaryLineItem(
                        props.config,
                        planId,
                      );

                      if (!primaryLineItem) {
                        throw new Error(`Base line item was not found`);
                      }

                      return (
                        <RadioGroupItemLabel
                          selected={selected}
                          key={primaryLineItem.id}
                        >
                          <RadioGroupItem
                            data-test-plan={plan.id}
                            key={plan.id + selected}
                            id={plan.id}
                            value={plan.id}
                            onClick={() => {
                              if (selected) {
                                return;
                              }

                              form.setValue('planId', planId, {
                                shouldValidate: true,
                              });

                              form.setValue('productId', product.id, {
                                shouldValidate: true,
                              });

                              form.setValue('addons', [], {
                                shouldValidate: true,
                              });
                            }}
                          />

                          <div
                            className={
                              'flex w-full flex-col content-center space-y-2 lg:flex-row lg:items-center lg:justify-between lg:space-y-0'
                            }
                          >
                            <Label
                              htmlFor={plan.id}
                              className={
                                'flex flex-col justify-center space-y-2'
                              }
                            >
                              <div className={'flex items-center space-x-2.5'}>
                                <span className="font-semibold">
                                  <Trans
                                    i18nKey={`billing:plans.${product.id}.name`}
                                    defaults={product.name}
                                  />
                                </span>

                                <If
                                  condition={
                                    plan.trialDays && props.canStartTrial
                                  }
                                >
                                  <div>
                                    <Badge
                                      className={'px-1 py-0.5 text-xs'}
                                      variant={'success'}
                                    >
                                      <Trans
                                        i18nKey={`billing:trialPeriod`}
                                        values={{
                                          period: plan.trialDays,
                                        }}
                                      />
                                    </Badge>
                                  </div>
                                </If>
                              </div>

                              <span className={'text-muted-foreground'}>
                                <Trans
                                  i18nKey={`billing:plans.${product.id}.description`}
                                  defaults={product.description}
                                />
                              </span>
                            </Label>

                            <div
                              className={
                                'flex flex-col space-y-2 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0 lg:text-right'
                              }
                            >
                              <div>
                                <Price key={plan.id}>
                                  <span>
                                    {formatCurrency({
                                      currencyCode:
                                        product.currency.toLowerCase(),
                                      value: primaryLineItem.cost,
                                      locale,
                                    })}
                                  </span>
                                </Price>

                                <div>
                                  <span className={'text-muted-foreground'}>
                                    <If
                                      condition={
                                        plan.paymentType === 'recurring'
                                      }
                                      fallback={
                                        <Trans i18nKey={`billing:lifetime`} />
                                      }
                                    >
                                      <Trans
                                        i18nKey={`billing:perPeriod`}
                                        values={{
                                          period: selectedInterval,
                                        }}
                                      />
                                    </If>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </RadioGroupItemLabel>
                      );
                    })}
                  </RadioGroup>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <If condition={selectedPlan?.addons}>
            <div className={'flex flex-col space-y-2.5'}>
              <span className={'text-sm font-medium'}>Addons</span>

              <div className={'flex flex-col space-y-2'}>
                {selectedPlan?.addons?.map((addon) => {
                  return (
                    <div
                      className={'flex items-center space-x-2 text-sm'}
                      key={addon.id}
                    >
                      <Checkbox
                        value={addon.id}
                        onCheckedChange={() => {
                          if (addons.some((item) => item.id === addon.id)) {
                            onAddonRemoved(addon.id);
                          } else {
                            onAddonAdded({
                              productId: selectedProduct.id,
                              planId: selectedPlan.id,
                              id: addon.id,
                              name: addon.name,
                              cost: addon.cost,
                            });
                          }
                        }}
                      />

                      <span>{addon.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </If>

          <div>
            <Button
              data-test="checkout-submit-button"
              disabled={props.pending ?? !form.formState.isValid}
            >
              {props.pending ? (
                t('redirectingToPayment')
              ) : (
                <>
                  <If
                    condition={selectedPlan?.trialDays && props.canStartTrial}
                    fallback={t(`proceedToPayment`)}
                  >
                    <span>{t(`startTrial`)}</span>
                  </If>

                  <ArrowRight className={'ml-2 h-4 w-4'} />
                </>
              )}
            </Button>
          </div>
        </form>

        {selectedPlan && selectedInterval && selectedProduct ? (
          <PlanDetails
            selectedInterval={selectedInterval}
            selectedPlan={selectedPlan}
            selectedProduct={selectedProduct}
            addons={addons}
          />
        ) : null}
      </div>
    </Form>
  );
}

function PlanDetails({
  selectedProduct,
  selectedInterval,
  selectedPlan,
  addons = [],
}: {
  selectedProduct: {
    id: string;
    name: string;
    description: string;
    currency: string;
    features: string[];
  };

  selectedInterval: string;

  selectedPlan: {
    lineItems: z.infer<typeof LineItemSchema>[];
    paymentType: string;
  };

  addons: z.infer<typeof AddonSchema>[];
}) {
  const isRecurring = selectedPlan.paymentType === 'recurring';
  const { i18n } = useTranslation(`billing`);

  // trick to force animation on re-render
  const key = Math.random();

  return (
    <div
      key={key}
      className={
        'fade-in animate-in zoom-in-95 flex w-full flex-col space-y-4 py-2 lg:px-8'
      }
    >
      <div className={'flex flex-col space-y-0.5'}>
        <span className={'text-sm font-medium'}>
          <b>
            <Trans
              i18nKey={`billing:plans.${selectedProduct.id}.name`}
              defaults={selectedProduct.name}
            />
          </b>{' '}
          <If condition={isRecurring}>
            / <Trans i18nKey={`billing:billingInterval.${selectedInterval}`} />
          </If>
        </span>

        <p>
          <span className={'text-muted-foreground text-sm'}>
            <Trans
              i18nKey={`billing:plans.${selectedProduct.id}.description`}
              defaults={selectedProduct.description}
            />
          </span>
        </p>
      </div>

      <If condition={selectedPlan.lineItems.length > 0}>
        <Separator />

        <div className={'flex flex-col space-y-2'}>
          <span className={'text-sm font-semibold'}>
            <Trans i18nKey={'billing:detailsLabel'} />
          </span>

          <LineItemDetails
            lineItems={selectedPlan.lineItems ?? []}
            selectedInterval={isRecurring ? selectedInterval : undefined}
            currency={selectedProduct.currency}
          />
        </div>
      </If>

      <Separator />

      <div className={'flex flex-col space-y-2'}>
        <span className={'text-sm font-semibold'}>
          <Trans i18nKey={'billing:featuresLabel'} />
        </span>

        {selectedProduct.features.map((item) => {
          return (
            <div key={item} className={'flex items-center space-x-1 text-sm'}>
              <CheckCircle className={'h-4 text-green-500'} />

              <span className={'text-secondary-foreground'}>
                <Trans i18nKey={item} defaults={item} />
              </span>
            </div>
          );
        })}
      </div>

      <If condition={addons.length > 0}>
        <div className={'flex flex-col space-y-2'}>
          <span className={'text-sm font-semibold'}>
            <Trans i18nKey={'billing:addons'} />
          </span>

          {addons.map((addon) => {
            return (
              <div
                key={addon.id}
                className={'flex items-center space-x-1 text-sm'}
              >
                <CheckCircle className={'h-4 text-green-500'} />

                <span className={'text-secondary-foreground'}>
                  <Trans i18nKey={addon.name} defaults={addon.name} />
                </span>

                <span>-</span>

                <span className={'text-xs font-semibold'}>
                  {formatCurrency({
                    currencyCode: selectedProduct.currency.toLowerCase(),
                    value: addon.cost,
                    locale: i18n.language,
                  })}
                </span>
              </div>
            );
          })}
        </div>
      </If>
    </div>
  );
}

function Price(props: React.PropsWithChildren) {
  return (
    <span
      className={
        'animate-in slide-in-from-left-4 fade-in text-xl font-semibold tracking-tight duration-500'
      }
    >
      {props.children}
    </span>
  );
}
```


## 12. Stripe Checkout Creation

File: `packages/billing/stripe/src/services/create-stripe-checkout.ts`

The Stripe checkout creation process now includes addons:

```typescript
if (params.addons.length > 0) {
  lineItems.push(
    ...params.addons.map((addon) => ({
      price: addon.planId,
      quantity: 1,
    })),
  );
}
```

This change ensures that selected addons are included in the Stripe checkout session.

## Conclusion

These changes introduce a flexible addon system to Makerkit. By implementing these updates, you'll be able to offer additional features or services alongside your main subscription plans.

Remember, while adding addons to the checkout process is now straightforward, managing them post-purchase (like allowing users to add or remove addons from an active subscription) will require additional custom development. Consider your specific use case and user needs when implementing this feature.
